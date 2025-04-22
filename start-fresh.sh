#!/bin/bash

# Kill existing processes
echo "Killing existing processes..."
pkill -f "metro"
pkill -f "expo"
lsof -ti:8081 | xargs kill -9 2>/dev/null
lsof -ti:8082 | xargs kill -9 2>/dev/null

# Clean up cache
echo "Cleaning up cache..."
watchman watch-del-all 2>/dev/null
rm -rf /tmp/metro-* 2>/dev/null
rm -rf /tmp/haste-map-* 2>/dev/null
rm -rf $TMPDIR/metro-* 2>/dev/null

# Clear npm cache
echo "Clearing npm cache..."
npm cache clean --force

# Install dependencies if needed
echo "Checking dependencies..."
npm install --legacy-peer-deps

# Start the app
echo "Starting the app..."
EXPO_CLEAR=true npx expo start --ios
