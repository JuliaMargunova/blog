import { DropdownDirection } from 'src/shared/types/ui';
import cls from 'src/shared/ui/deprecated/Popups/styles/popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
};
