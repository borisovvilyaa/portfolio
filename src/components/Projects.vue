<template>
    <div class="container">
        <div class="text-main project-header">
            <h3>Project’s</h3>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-12 mb-4">
                <div class="text-project-name">
                    <h3><a href="https://github.com/borisovvilyaa/delta-wallet"><img src="@/assets/image/project/delta.png" alt="">Delta Wallet</a></h3>
                    <ol>
                        <li>Developed a Bitcoin cryptocurrency wallet using Vue.js for the frontend and Golang for the backend.</li>
                        <li>Implemented transaction tracking and display functionality, allowing users to view their transaction history.</li>
                        <li>Enabled the wallet to decode and display transaction details, including recipient addresses and transaction amounts.</li>
                        <li>Integrated the capability to generate new Bitcoin addresses and receive Bitcoin payments securely.</li>
                        <li>Utilized Vue.js for the frontend to provide a user-friendly and responsive interface.</li>
                        <li>Employed Golang for the backend to ensure robust and efficient wallet operations.</li>
                        <li>Leveraged the wallet's compatibility with the Bitcoin blockchain to facilitate secure and reliable transactions.</li>
                        <li>Ensured that the wallet adheres to industry standards and best practices for cryptocurrency storage and management.</li>
                    </ol>
                </div>
            </div>
            <div class="col-md-6 col-sm-12 mb-4">
                <div class="text-project-name">
                    <h3><a href="https://github.com/borisovvilyaa/CryptoGuard"><img src="@/assets/image/project/crypto.png" alt="">CryptoGuard</a></h3>
                    <p>
                        <span class="fw-bold">"CryptoGuard"</span> - A Python-based app designed for securing personal information using robust cryptographic techniques. It offers essential encryption and decryption tools for safeguarding crucial files and messages.
                    </p>
                    <p class="fw-bold">Key Features:</p>
                    <ol>
                        <li>File Encryption: Protect sensitive documents with advanced encryption algorithms like AES. Users can create encrypted containers for secure file storage and management.</li>
                        <li>Message Encryption: "CryptoGuard" features a secure message encryption and decryption module for protecting sensitive communications.</li>
                        <li>Password Generator: Generate strong and unique passwords effortlessly. Enhance online account security with complex, hard-to-crack passwords.</li>
                        <li>Password Storage: Safely store passwords in an encrypted database accessible only through a master password or biometric authentication methods like fingerprint scanning or facial recognition.</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Project',
        // ...
    }
</script>
