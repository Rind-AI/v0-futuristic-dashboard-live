@echo off
title 🚀 v0-Futuristic Dashboard - LOCALHOST DEVELOPMENT
color 0A
cls

echo.
echo ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════╗
echo ║  ██╗      ██████╗  ██████╗ █████╗ ██╗     ██╗  ██╗ ██████╗ ███████╗████████╗                          ║
echo ║  ██║     ██╔═══██╗██╔════╝██╔══██╗██║     ██║  ██║██╔═══██╗██╔════╝╚══██╔══╝                          ║
echo ║  ██║     ██║   ██║██║     ███████║██║     ███████║██║   ██║███████╗   ██║                             ║
echo ║  ██║     ██║   ██║██║     ██╔══██║██║     ██╔══██║██║   ██║╚════██║   ██║                             ║
echo ║  ███████╗╚██████╔╝╚██████╗██║  ██║███████╗██║  ██║╚██████╔╝███████║   ██║                             ║
echo ║  ╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝   ╚═╝                             ║
echo ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════╝
echo.
echo 🚀 LOCALHOST DEVELOPMENT SERVER - NON-CODER FRIENDLY
echo.
echo 💰 STRIPE TEST MODE ACTIVE:
echo    🔸 Test payments enabled (no real charges)
echo    🔸 Publishable Key: pk_test_51RbXu23iFqttcbW7sfS2Xkd2ZmWIduYBWs...
echo    🔸 Safe for development and testing
echo.
echo ⚡ DEVELOPMENT FEATURES:
echo    ✅ Live Hot Reload - Changes update instantly
echo    ✅ Error Reporting - See issues immediately  
echo    ✅ Test Stripe Payments - Safe to test purchases
echo    ✅ Full Source Code Access - Modify anything
echo    ✅ No Third-Party Dependencies - Your code, your control
echo.
echo 🎯 WHAT'S STARTING:
echo    📍 Server URL: http://localhost:3000
echo    🎨 Futuristic Dashboard Interface
echo    💳 Stripe Test Payment Integration
echo    📊 Real-time Analytics Preview
echo    🛡️ Secure Development Environment
echo.
echo Press any key to start development server...
pause >nul

echo.
echo 🚀 STARTING DEVELOPMENT SERVER...
echo.

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Error: npm is not installed or not in PATH
    echo 💡 Please install Node.js from: https://nodejs.org
    pause
    exit /b 1
)

REM Install dependencies if needed
if not exist node_modules (
    echo 📦 Installing dependencies...
    npm install
    if %ERRORLEVEL% NEQ 0 (
        echo ❌ Error installing dependencies
        pause
        exit /b 1
    )
)

echo ✅ Dependencies ready!
echo.
echo 🌐 Starting Next.js development server...
echo 📍 Your app will be available at: http://localhost:3000
echo.
echo 💡 PRO TIPS FOR NON-CODERS:
echo    - Keep this window open while developing
echo    - Open http://localhost:3000 in your browser
echo    - Make changes to files and see them instantly
echo    - Test Stripe payments safely (no real charges)
echo    - Press Ctrl+C to stop the server anytime
echo.
echo 🎊 READY TO DEVELOP! Opening browser...
echo.

REM Start development server
npm run dev

echo.
echo 👋 Development server stopped.
echo Thanks for using v0-Futuristic Dashboard!
pause