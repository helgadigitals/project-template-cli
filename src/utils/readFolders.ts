import * as fs from 'fs/promises';

export interface FoldersAvailable {
	value: string;
	label: string;
}

export const readFolders = async (path: string): Promise<FoldersAvailable[]> => {
	const folderNames = await fs.readdir(path);
	const folders = folderNames.map((folderName) => {
		return {
			label: folderName,
			value: `${path}/${folderName}`
		};
	});
	
	return folders;
};