<template>
    <div class="container">
        <div class="text-main project-header">
            <h3>Project’s</h3>
        </div>
        <div class="row">
            <!-- First Project Section -->
            <div class="col-md-6 col-sm-12 mb-4">
                <div class="text-project-name">
                    <h3>
                        <a href="https://github.com/borisovvilyaa/delta-wallet"><img src="@/assets/image/project/delta.png" alt="">Delta Wallet</a>
                    </h3> <!-- Project name with a link and an image -->
                    <div class="tech">
                        <div class="tech-items">
                            <img src="@/assets/image/tech/Bitcoin.png" alt=""> <!-- Technology icons -->
                            <img src="@/assets/image/tech/Vue.png" alt="">
                            <img src="@/assets/image/tech/Golang.png" alt="">
                            <img src="@/assets/image/tech/NodeJS.png" alt="">
                        </div>
                    </div>
                    <p>
                        <span class="fw-bold">"Delta Wallet"</span> is a cryptocurrency wallet that seamlessly combines the power of Vue.js for the frontend and Golang for the backend to offer users a secure, efficient, and user-friendly Bitcoin wallet experience. With a focus on transaction tracking, decoding, and adherence to industry standards, "Delta Wallet" redefines how users manage their Bitcoin assets. </p> <!-- Project description -->
                    <p class="fw-bold">Key Features:</p> <!-- Key features of the project listed as bullet points -->
                    <ol>
                        <li>Transaction Tracking and Display: "Delta Wallet" empowers users to effortlessly keep tabs on their Bitcoin transactions. The intuitive interface provides a clear view of transaction history, ensuring users can monitor their financial activity with ease.</li>
                        <li>Transaction Details: Delve into the specifics of your Bitcoin transactions with "Delta Wallet." The wallet excels at decoding and presenting comprehensive transaction details, including recipient addresses and precise transaction amounts. Gain a deeper understanding of your financial interactions.</li>
                        <li>Address Generation and Secure Payments: Generating new Bitcoin addresses and securely receiving payments is a breeze with "Delta Wallet." The wallet's robust infrastructure guarantees the security of these critical functions, giving users peace of mind.</li>
                        <li>User-Friendly Interface: Vue.js powers the frontend, delivering a responsive and user-friendly interface. Whether on a desktop or mobile device, users will appreciate the smooth and intuitive interactions.</li>
                        <li>Efficiency with Golang: The backend of "Delta Wallet" relies on Golang, ensuring efficiency, robustness, and smooth wallet operations. Count on quick and reliable performance as you manage your Bitcoin assets.</li>
                        <li>Blockchain Compatibility: "Delta Wallet" seamlessly interacts with the Bitcoin blockchain, guaranteeing the utmost security and reliability in all your transactions. Your Bitcoin holdings are in safe hands.</li>
                    </ol>
                </div>
            </div>

            <!-- Second Project Section -->
            <div class="col-md-6 col-sm-12 mb-4">
                <div class="text-project-name">
                    <h3><a href="https://github.com/borisovvilyaa/CryptoGuard"><img src="@/assets/image/project/crypto.png" alt="">CryptoGuard</a></h3> <!-- Project name with a link and an image -->
                    <div class="tech">
                        <div class="tech-items">
                            <img src="@/assets/image/tech/Python.png" alt=""> <!-- Technology icon -->
                        </div>
                    </div>
                    <p>
                        <span class="fw-bold">"CryptoGuard"</span> - A Python-based app designed for securing personal information using robust cryptographic techniques. It offers essential encryption and decryption tools for safeguarding crucial files and messages.
                    </p> <!-- Project description -->
                    <p class="fw-bold">Key Features:</p> <!-- Key features of the project listed as bullet points -->
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
  name: 'MyProject',
}
</script>
