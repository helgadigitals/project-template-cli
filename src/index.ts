#!/usr/bin/env node

import * as clack from '@clack/prompts';
import { type FoldersAvailable, readFolders } from './utils/readFolders';
import { copyToFolder } from './utils/copyToFolder';
import * as process from 'node:process';

async function main() {
	clack.intro('🚀 Welcome to my CLI app');
	
	const mainDirectory = process.cwd();
	
	const projectName = (await clack.text({
		message: 'Enter the project name:',
		placeholder: 'My amazing project',
		validate(value) {
			if (value.length === 0) return `Project name is required`;
		}
	})) as string;
	
	let templates: FoldersAvailable[] = [];
	
	try {
		templates = await readFolders(`${mainDirectory}/templates`);
	} catch (error) {
		clack.log.error('🛑 Error reading templates folder.');
		process.exit(1);
	}
	
	const selectProjectType = (await clack.select({
		message: 'Select the project type:',
		options: templates
	})) as string;
	
	try {
		const s = clack.spinner();
		s.start('Creating project...');
		await copyToFolder(selectProjectType, `${mainDirectory}/${projectName}`);
		clack.log.success('✅ Project created successfully.');
		process.exit(0);
	} catch (error) {
		clack.log.error('🛑 Error creating a project:');
		process.exit(1);
	}
	
	clack.outro('👋 Thank you');
}

main();