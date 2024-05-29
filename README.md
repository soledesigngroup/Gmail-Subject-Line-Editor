  # Gmail Subject Line Editor

Gmail Subject Line Editor is a Chrome extension that allows you to edit and rename subject lines for received emails in Gmail, making them clearer and more specific for your needs. The edited subject lines are stored locally and will remain visible even after refreshing the page.

## Features

- Double-click on an email subject line to edit it.
- Changes are stored locally using `chrome.storage` and persist across page reloads.
- The original subject line is used when replying to emails.

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/gmail-subject-line-editor.git
   cd gmail-subject-line-editor

2. **Open Chrome Extensions page**:
   - Open Google Chrome.
   - Go to the Chrome extensions page by typing `chrome://extensions` in the address bar and pressing Enter.

3. **Enable Developer Mode**:
   - In the top right corner of the extensions page, toggle the "Developer mode" switch to the "on" position.

4. **Load Unpacked Extension**:
   - Click the "Load unpacked" button that appears after enabling Developer mode.
   - In the file dialog that opens, navigate to the directory where you cloned the repository and select it.

## Usage

1. **Open Gmail**:
   - Navigate to [Gmail](https://mail.google.com/) and sign in to your account.

2. **Edit Subject Lines**:
   - Locate an email subject line. Double-click on it to prompt for a new subject line.
   - Enter a new subject line and confirm. The subject line will change visually.

3. **Check Persistence**:
   - Refresh the Gmail page and verify that the edited subject lines persist.

## Development

### Files

- `manifest.json`: Configuration file for the Chrome extension.
- `background.js`: Manages the background functionality of the extension.
- `content.js`: Handles interaction with the Gmail interface.
- `popup.html`: Defines the popup UI for the extension.
- `icons/`: Contains the icon files for the extension.

### Local Development

1. **Make Changes**:
   - Edit the files as needed for development and testing.

2. **Reload Extension**:
   - After making changes, go to the Chrome extensions page and click the "Reload" button next to the extension.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

Thank you for using Gmail Subject Line Editor! If you have any feedback or suggestions, feel free to reach out.

### Additional Instructions:

1. **Add the README to Your Repository**:
   - Save the above content to a file named `README.md` in your project directory.
   - Add, commit, and push the file to your GitHub repository:
     ```sh
     git add README.md
     git commit -m "Add README.md"
     git push
     ```

2. **Include License File (Optional)**:
   - If you want to include a license, create a `LICENSE` file with your chosen license text (e.g., MIT License).

This `README.md` file provides an overview of your extension, installation instructions, usage guidelines, and development information. It will help others understand and contribute to your project.

