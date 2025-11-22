export type ColorMode = "light" | "dark";
export type ColorModeProps = { mode: ColorMode };
export type ThemeValues = Record<ColorMode, string>;

export function useTheme(light: string, dark: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (props: any) {
    const mode = props.Theme?.mode as ColorMode;
    const values = { light, dark };
    return values[mode];
  };
}
