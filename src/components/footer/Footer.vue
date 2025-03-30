<template>
    <footer class="footer">
        <div class="container">
            <!-- Footer Navigation -->
            <nav class="footer-nav">
                <ul>
                    <li><a href="#privacy-policy">Privacy Policy</a></li>
                    <li><a href="#terms-of-service">Terms of Service</a></li>
                    <li><a href="#contact-us">Contact Us</a></li>
                </ul>
            </nav>

            <!-- Social Media Links -->
            <div class="social-links">
                <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                    <i class="pi pi-facebook text-blue-500" style="font-size: 2rem"></i>
                </a>
                <a href="https://www.tiktok.com" target="_blank" aria-label="TikTok">
                    <i class="pi pi-tiktok text-black-500" style="font-size: 2rem"></i>
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Get the current year dynamically
const currentYear = ref(new Date().getFullYear());
</script>

<style lang="scss" scoped>
.footer {
    padding: 20px 0;
    text-align: center;
}

.footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
}

.footer-nav ul {
    list-style-type: none;
    display: flex;
    gap: 20px;
    margin: 0;
}

.footer-nav a {
    text-decoration: none;
}

.social-links {
    display: flex;
    gap: 15px;
}

@media (max-width: 768px) {
    .footer .container {
        flex-direction: column;
        text-align: center;
    }

    .footer-nav ul {
        margin-bottom: 20px;
    }

    .social-links {
        margin-bottom: 20px;
    }
}
</style>
