#!/usr/bin/env node

import * as clack from '@clack/prompts';
import { fetchGitHubTemplates, downloadAndCopyRepo } from './utils/git';
import * as process from 'node:process';

async function main() {
	clack.intro('🚀 Welcome to Project-template-cli');
	
	const mainDirectory = process.cwd();
	
	const projectName = (await clack.text({
		message: 'Enter the project name:',
		placeholder: 'My amazing project',
		validate(value) {
			if (value.length === 0) return `Project name is required`;
		}
	})) as string;
	
	let templates = [];
	
	try {
		templates = await fetchGitHubTemplates();
	} catch (error) {
		console.error(error);
		clack.log.error('🛑 Error fetching templates from GitHub.');
		process.exit(1);
	}
	
	const selectProjectType = (await clack.select({
		message: 'Select the project type:',
		options: templates
	})) as string;
	
	try {
		const s = clack.spinner();
		s.start('Creating project...');
		await downloadAndCopyRepo(selectProjectType, `${mainDirectory}/${projectName}`);
		clack.log.success('✅ Project created successfully.');
		process.exit(0);
	} catch (error) {
		console.error(error);
		clack.log.error('🛑 Error creating a project:');
		process.exit(1);
	}
	
	clack.outro('👋 Thank you');
}

main();
