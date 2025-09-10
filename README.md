# Multilingual Next.js Project Template

This is a template for building multilingual websites using Next.js and `next-intl`.

## About This Template

This project has been cleaned and set up to serve as a starting point for new multilingual applications. It includes:

- A minimal set of pages (Home, About, FAQ).
- Internationalization setup for English and Spanish.
- A theme provider with dark/light mode support.
- A generic animated background component.
- A clean dependency list.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Installation

First, install the necessary dependencies using npm:

```bash
npm install
```

### 2. Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Changing Text and Translations

All text content is managed through the JSON files in the `messages` directory (`en.json`, `es.json`). To change any text on the website, edit the corresponding key in these files.

### Adding a New Language

1.  **Create a new translation file:** Add a new JSON file in the `messages` directory (e.g., `fr.json` for French).
2.  **Update the middleware:** Open `src/i18n/routing.ts` and add the new language code to the `locales` array.

    ```typescript
    // src/i18n/routing.ts
    import { defineRouting } from "next-intl/routing";

    export const routing = defineRouting({
      locales: ["en", "es", "fr"], // Add your new locale here
      defaultLocale: "en",
    });
    ```

3.  **Update the language switcher:** If you want the new language to appear in the language switcher dropdown, you may need to update the component (e.g., `src/components/navbar/LanguageSwitcher.tsx`) to include it.

### Customizing the Theme

The project uses Tailwind CSS for styling. You can customize the theme by editing the `tailwind.config.ts` file. Colors, fonts, and other design tokens can be modified there.

The dark/light mode is handled by `next-themes` and the `ThemeProvider` component in `src/components/theme-provider.tsx`.