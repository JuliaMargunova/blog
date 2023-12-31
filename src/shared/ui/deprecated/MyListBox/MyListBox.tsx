import React, { Fragment, useState } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '../Button';
import cls from './MyListBox.module.scss';

interface ListBoxProps {
    className?: string;
}
const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
];

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const MyListBox = ({ className }: ListBoxProps) => {
    const [selectedPerson, setSelectedPerson] = useState(people[0]);

    return (
        <HListBox
            as="div"
            value={selectedPerson}
            className={cls.ListBox}
            onChange={setSelectedPerson}
        >
            <HListBox.Button className={cls.trigger}>
                <Button>{selectedPerson.name}</Button>
            </HListBox.Button>
            <HListBox.Options className={cls.options}>
                {people.map((person) => (
                    <HListBox.Option
                        key={person.id}
                        value={person}
                        disabled={person.unavailable}
                        as={Fragment}
                    >
                        {({ active, selected }) => (
                            <li
                                className={classNames(cls.item, {
                                    [cls.active]: active,
                                })}
                            >
                                {selected && '!!!'}
                                {person.name}
                            </li>
                        )}
                    </HListBox.Option>
                ))}
            </HListBox.Options>
        </HListBox>
    );
};

// import { Fragment, ReactNode, useState } from 'react';
// import { Listbox as HListBox } from '@headlessui/react';
// import { classNames, Mods } from 'shared/lib/classNames/classNames';
// import { HStack } from '../Stack';
// import { Button } from '../Button/Button';
// import cls from './ListBox.module.scss';
//
// export interface ListBoxItem {
//     value: string;
//     content: ReactNode;
//     disabled?: boolean;
// }
//
// type DropdownDirection = 'top' | 'bottom';
//
// interface ListBoxProps {
//     items?: ListBoxItem[];
//     className?: string;
//     value?: string;
//     defaultValue?: string;
//     onChange: (value: string) => void;
//     readonly?: boolean;
//     direction?: DropdownDirection;
//     label?: string;
// }
//
// const mapDirectionClass: Record<DropdownDirection, string> = {
//     bottom: cls.optionsBottom,
//     top: cls.optionsTop,
// };
//
// export function ListBox(props: ListBoxProps) {
//     const {
//         className,
//         items,
//         value,
//         defaultValue,
//         onChange,
//         readonly,
//         direction = 'bottom',
//         label,
//     } = props;
//
//     const optionsClasses = [mapDirectionClass[direction]];
//
//     return (
//         <HStack gap="4">
//             {label && <span>{`${label}>`}</span>}
//             <HListBox
//                 disabled={readonly}
//                 as="div"
//                 className={classNames(cls.ListBox, {}, [className])}
//                 value={value}
//                 onChange={onChange}
//             >
//                 <HListBox.Button disabled={readonly} className={cls.trigger}>
//                     <Button disabled={readonly}>
//                         {value ?? defaultValue}
//                     </Button>
//                 </HListBox.Button>
//                 <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
//                     {items?.map((item) => (
//                         <HListBox.Option
//                             key={item.value}
//                             value={item.value}
//                             disabled={item.disabled}
//                             as={Fragment}
//                         >
//                             {({ active, selected }) => (
//                                 <li
//                                     className={classNames(
//                                         cls.item,
//                                         {
//                                             [cls.active]: active,
//                                             [cls.disabled]: item.disabled,
//                                         },
//                                     )}
//                                 >
//                                     {selected && '!!!'}
//                                     {item.content}
//                                 </li>
//                             )}
//                         </HListBox.Option>
//                     ))}
//                 </HListBox.Options>
//             </HListBox>
//         </HStack>
//     );
// }
