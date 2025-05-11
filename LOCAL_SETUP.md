
# Local Development Setup

## Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

## Setup Instructions

1. Clone the repository to your local machine
   ```
   git clone [your-repository-url]
   cd [repository-name]
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   node local-dev.js
   ```
   
   Alternatively, you can run directly:
   ```
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## Troubleshooting

If you encounter issues with running the project locally:

1. Clear node_modules and reinstall dependencies:
   ```
   rm -rf node_modules
   npm cache clean --force
   npm install
   ```

2. Make sure you're not trying to modify any read-only files like:
   - package.json
   - Any files listed in read-only-files

3. Check for environment variables:
   If the app requires environment variables, create a .env file based on .env.example

4. For any Supabase connection issues:
   Make sure your Supabase URL and anon key are properly configured

## Notes

- This project is built with Lovable, which has certain conventions about file structure and setup.
- Any modifications to package.json need to be done through the Lovable interface, not directly.
