import * as fs from 'fs/promises';
import * as path from 'path';
import simpleGit from 'simple-git';
import axios from 'axios';

export interface GitHubTemplate {
	value: string;
	label: string;
}

interface GitHubRepo {
	name: string;
	clone_url: string;
}

export const fetchGitHubTemplates = async (): Promise<GitHubTemplate[]> => {
	const GITHUB_USER = 'helgadigitals';
	const API_URL = `https://api.github.com/users/${GITHUB_USER}/repos`;
	
	try {
		const response = await axios.get<GitHubRepo[]>(API_URL);
		return response.data.map((repo) => ({
			label: repo.name,
			value: repo.clone_url,
		}));
	} catch (error) {
		console.error('Error fetching GitHub templates:', error);
		throw error;
	}
};

export const downloadAndCopyRepo = async (repoUrl: string, destination: string): Promise<void> => {
	const tempDir = path.join(process.cwd(), 'temp_repo');
	const git = simpleGit();
	
	try {
		// Clone the repository to a temporary directory
		await git.clone(repoUrl, tempDir);
		
		// Copy the contents of the cloned repository to the destination
		const copyRecursive = async (source: string, dest: string): Promise<void> => {
			const stats = await fs.lstat(source);
			
			if (stats.isDirectory()) {
				await fs.mkdir(dest, { recursive: true });
				const items = await fs.readdir(source);
				for (const item of items) {
					const srcPath = path.join(source, item);
					const destPath = path.join(dest, item);
					await copyRecursive(srcPath, destPath);
				}
			} else if (stats.isFile()) {
				await fs.copyFile(source, dest);
			}
		};
		
		await copyRecursive(tempDir, destination);
	} catch (error) {
		console.error(`Error cloning repository ${repoUrl}:`, error);
		throw error;
	} finally {
		// Clean up temporary directory
		await fs.rm(tempDir, { recursive: true, force: true });
	}
};