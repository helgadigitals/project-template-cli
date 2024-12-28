import * as fs from 'fs/promises';
import * as path from 'path';

const copyRecursive = async (source: string, destination: string): Promise<void> => {
	const stats = await fs.lstat(source);
	
	if (stats.isDirectory()) {
		await fs.mkdir(destination, { recursive: true });
		const items = await fs.readdir(source);
		
		for (const item of items) {
			const srcPath = path.join(source, item);
			const destPath = path.join(destination, item);
			await copyRecursive(srcPath, destPath);
		}
	} else if (stats.isFile()) {
		await fs.copyFile(source, destination);
	}
};

export const copyToFolder = async (source: string, destination: string): Promise<void> => {
	try {
		await copyRecursive(source, destination);
	} catch (error) {
		console.error(`Error copying folder from ${source} to ${destination}:`, error);
		throw error;
	}
};