import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../services/seo.service';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Contact Me - Muhammad Hassan');
    this.seoService.updateMetaTags({
      description: 'Get in touch with Muhammad Hassan for collaboration, job opportunities, or inquiries.',
      keywords: 'Contact, Email, LinkedIn, GitHub, Hire, Software Engineer',
    });

    // Initialize EmailJS (do this once in your app)
    emailjs.init('n3b9TE4wNZGSibDT7'); // Replace with your actual public key
  }

  email = 'mhassanahmad905@gmail.com';
  github = 'https://github.com/Muhammad-Hassan-522';
  linkedin = 'https://www.linkedin.com/in/muhammad-hassan-42a823301';
  resumePath = 'assets/Muhammad_Hassan_Resume.pdf';

  // Form state
  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  async onSubmit(event: Event) {
    event.preventDefault();

    // Validation
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.submitMessage = 'Please fill in all fields';
      this.submitSuccess = false;
      return;
    }

    if (!this.isValidEmail(this.formData.email)) {
      this.submitMessage = 'Please enter a valid email address';
      this.submitSuccess = false;
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_h5adq17',      // Replace with your service ID
        'template_0ugkwpx',     // Replace with your template ID
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          message: this.formData.message,
          to_name: 'Muhammad Hassan',
        }
      );

      this.submitSuccess = true;
      this.submitMessage = 'Message sent successfully! I\'ll get back to you soon.';

      // Reset form
      this.formData = { name: '', email: '', message: '' };

      // Clear success message after 5 seconds
      setTimeout(() => {
        this.submitMessage = '';
      }, 5000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      this.submitSuccess = false;
      this.submitMessage = 'Failed to send message. Please try emailing me directly.';
    } finally {
      this.isSubmitting = false;
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
