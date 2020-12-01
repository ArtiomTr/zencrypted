export enum SettingTemplateTypes {
    LIGHT = 0,
    MEDIUM = 1,
    STRONG = 2,
    PARANOIC = 3,
}

export const settingTemplateLabels = [
    'Light protection',
    'Medium protection',
    'Strong protection',
    'Paranoic',
];

export const settingTemplateIconColors = ['#4db6ac', '#ff8a65', '#e57373', '#9575cd'];

export const allSettingsTemplateValues: number[] = Object.values(SettingTemplateTypes).filter(
    (value) => typeof value === 'number',
) as number[];
