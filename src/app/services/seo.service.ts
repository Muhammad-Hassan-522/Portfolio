import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root',
})
export class SeoService {
    constructor(private title: Title, private meta: Meta) { }

    updateTitle(title: string) {
        this.title.setTitle(title);
    }

    updateMetaTags(config: {
        title?: string;
        description?: string;
        keywords?: string;
        image?: string;
        url?: string;
        type?: string;
    }) {
        if (config.title) this.updateTitle(config.title);

        if (config.description) {
            this.meta.updateTag({ name: 'description', content: config.description });
            this.meta.updateTag({ property: 'og:description', content: config.description });
            this.meta.updateTag({ name: 'twitter:description', content: config.description });
        }

        if (config.keywords) {
            this.meta.updateTag({ name: 'keywords', content: config.keywords });
        }

        if (config.image) {
            this.meta.updateTag({ property: 'og:image', content: config.image });
            this.meta.updateTag({ name: 'twitter:image', content: config.image });
        }

        if (config.url) {
            this.meta.updateTag({ property: 'og:url', content: config.url });
        }

        if (config.type) {
            this.meta.updateTag({ property: 'og:type', content: config.type });
        }
    }
}
