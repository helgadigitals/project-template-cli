import { defineConfig } from 'tsup';

// Copy 'templates' folder to 'dist' folder:
import { cp } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export default defineConfig({
	entryPoints: ['src/index.ts'],
	format: ['cjs', 'esm'],
	dts: true,
	clean: true,
	shims: true,
	outDir: 'dist',
	async onSuccess() {
		await cp(
			path.join(path.dirname(fileURLToPath(import.meta.url)), 'templates'), // 👈 This folder will be created in the next step on this tutorial 😉.
			path.join('dist', 'templates'),
			{ recursive: true }
		);
	}
});