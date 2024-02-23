import transformerVariantGroup from '@unocss/transformer-variant-group';
import { defineConfig, presetUno, presetIcons, presetWebFonts } from 'unocss';

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons(),
		presetWebFonts({
			provider: 'google',
			fonts: {
				'space': 'Space Grotesk',
				'space-mono': 'Space Mono'
			}
		})
	],
	transformers: [transformerVariantGroup()],
	theme: {
		colors: {
			primary: {
				DEFAULT: '#0e153a'
			},
			accentDark: {
				DEFAULT: '#3d5af1'
			},
			accentLight: {
				DEFAULT: '#22d1ee'
			},
			text: {
				DEFAULT: '#e2f3f5'
			}
		}
	}
});
