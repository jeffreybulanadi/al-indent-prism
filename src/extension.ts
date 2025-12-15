import * as vscode from 'vscode';

let decorationTypes: vscode.TextEditorDecorationType[] = [];
let timeout: NodeJS.Timeout | undefined = undefined;

export function activate(context: vscode.ExtensionContext) {
	console.log('AL Indent Prism is now active!');

	// Initial decoration
	updateDecorations();

	// Update decorations when active editor changes
	vscode.window.onDidChangeActiveTextEditor(editor => {
		if (editor) {
			updateDecorations();
		}
	}, null, context.subscriptions);

	// Update decorations when document changes
	vscode.workspace.onDidChangeTextDocument(event => {
		const activeEditor = vscode.window.activeTextEditor;
		if (activeEditor && event.document === activeEditor.document) {
			triggerUpdateDecorations();
		}
	}, null, context.subscriptions);

	// Update decorations when configuration changes
	vscode.workspace.onDidChangeConfiguration(e => {
		if (e.affectsConfiguration('alIndentPrism')) {
			disposeDecorations();
			updateDecorations();
		}
	}, null, context.subscriptions);
}

function triggerUpdateDecorations() {
	if (timeout) {
		clearTimeout(timeout);
		timeout = undefined;
	}
	timeout = setTimeout(updateDecorations, 100);
}

function updateDecorations() {
	const editor = vscode.window.activeTextEditor;
	if (!editor) {
		return;
	}

	// Only activate for AL language files
	if (editor.document.languageId !== 'al') {
		return;
	}

	const config = vscode.workspace.getConfiguration('alIndentPrism');
	const enabled = config.get<boolean>('enabled', true);

	if (!enabled) {
		disposeDecorations();
		return;
	}

	const indentSize = config.get<number>('indentSize', 4);
	const isDarkTheme = vscode.window.activeColorTheme.kind === vscode.ColorThemeKind.Dark;
	const colors = config.get<string[]>(isDarkTheme ? 'colors' : 'lightColors', [
		'rgba(255, 64, 64, 0.3)',
		'rgba(255, 178, 64, 0.3)',
		'rgba(255, 255, 64, 0.3)',
		'rgba(64, 255, 64, 0.3)',
		'rgba(64, 178, 255, 0.3)',
		'rgba(178, 64, 255, 0.3)'
	]);

	// Dispose old decorations
	disposeDecorations();

	// Create new decoration types for each color
	decorationTypes = colors.map(color => {
		return vscode.window.createTextEditorDecorationType({
			backgroundColor: color
		});
	});

	// Build decorations for each indent level
	const decorationsArray: vscode.DecorationOptions[][] = colors.map(() => []);

	for (let lineNum = 0; lineNum < editor.document.lineCount; lineNum++) {
		const line = editor.document.lineAt(lineNum);
		const text = line.text;

		// Skip empty lines
		if (text.trim().length === 0) {
			continue;
		}

		// Count leading spaces
		let spaces = 0;
		for (let i = 0; i < text.length; i++) {
			if (text[i] === ' ') {
				spaces++;
			} else if (text[i] === '\t') {
				spaces += indentSize;
			} else {
				break;
			}
		}

		// Create decorations for each indent level on this line
		const indentLevels = Math.floor(spaces / indentSize);
		for (let level = 0; level < indentLevels; level++) {
			const startChar = level * indentSize;
			const endChar = startChar + indentSize;
			
			// Make sure we don't go beyond the actual spaces
			if (startChar >= spaces) {
				break;
			}

			const range = new vscode.Range(
				new vscode.Position(lineNum, startChar),
				new vscode.Position(lineNum, Math.min(endChar, spaces))
			);

			const colorIndex = level % colors.length;
			decorationsArray[colorIndex].push({ range });
		}
	}

	// Apply decorations
	decorationTypes.forEach((decorationType, index) => {
		editor.setDecorations(decorationType, decorationsArray[index]);
	});
}

function disposeDecorations() {
	decorationTypes.forEach(decorationType => decorationType.dispose());
	decorationTypes = [];
}

export function deactivate() {
	disposeDecorations();
}
