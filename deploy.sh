#!/bin/bash

# BioLogic AI Landing Page Deployment Script

echo "🚀 BioLogic AI Landing Page - Deployment Script"
echo "================================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building for production..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo ""
    echo "📁 Build files are in the 'build' directory"
    echo ""
    echo "🌐 Deployment Options:"
    echo "1. Netlify: Drag and drop the 'build' folder to netlify.com"
    echo "2. Vercel: Run 'npx vercel' from the project root"
    echo "3. Traditional hosting: Upload contents of 'build' folder to your web server"
    echo ""
    echo "📊 To test the build locally:"
    echo "   npx serve -s build"
    echo ""
    echo "🎯 The landing page is ready for deployment!"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi

