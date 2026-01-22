import { App } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { PublicProps } from 'vue';

declare const __VLS_component: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: (event: MouseEvent) => any;
}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{
onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
type: "primary" | "default" | "danger" | "text";
size: "small" | "medium" | "large";
disabled: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLButtonElement>;

declare const __VLS_component_2: DefineComponent<__VLS_Props_2, {
focus: () => void | undefined;
blur: () => void | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
blur: (event: FocusEvent) => any;
focus: (event: FocusEvent) => any;
"update:modelValue": (value: string) => any;
enter: (event: KeyboardEvent) => any;
clear: () => any;
}, string, PublicProps, Readonly<__VLS_Props_2> & Readonly<{
onBlur?: ((event: FocusEvent) => any) | undefined;
onFocus?: ((event: FocusEvent) => any) | undefined;
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
onEnter?: ((event: KeyboardEvent) => any) | undefined;
onClear?: (() => any) | undefined;
}>, {
type: string;
disabled: boolean;
error: boolean;
placeholder: string;
readonly: boolean;
clearable: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
inputRef: HTMLInputElement;
}, HTMLDivElement>;

declare const __VLS_component_3: DefineComponent<__VLS_Props_3, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
change: (value: string | number | null, option: Option_2 | null) => any;
"update:modelValue": (value: string | number | null) => any;
}, string, PublicProps, Readonly<__VLS_Props_3> & Readonly<{
onChange?: ((value: string | number | null, option: Option_2 | null) => any) | undefined;
"onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
}>, {
disabled: boolean;
error: boolean;
placeholder: string;
valueKey: string;
labelKey: string;
filterable: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
selectRef: HTMLDivElement;
}, HTMLDivElement>;

declare const __VLS_component_4: DefineComponent<__VLS_Props_4, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
select: (keys: (string | number)[], rows: any[]) => any;
"row-click": (row: any, index: number) => any;
"select-all": (selected: boolean) => any;
}, string, PublicProps, Readonly<__VLS_Props_4> & Readonly<{
onSelect?: ((keys: (string | number)[], rows: any[]) => any) | undefined;
"onRow-click"?: ((row: any, index: number) => any) | undefined;
"onSelect-all"?: ((selected: boolean) => any) | undefined;
}>, {
rowKey: string;
loading: boolean;
stripe: boolean;
showIndex: boolean;
selectable: boolean;
selectedKeys: (string | number)[];
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_5: DefineComponent<__VLS_Props_5, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
cancel: () => any;
close: () => any;
"update:modelValue": (value: boolean) => any;
confirm: () => any;
open: () => any;
}, string, PublicProps, Readonly<__VLS_Props_5> & Readonly<{
onCancel?: (() => any) | undefined;
onClose?: (() => any) | undefined;
"onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
onConfirm?: (() => any) | undefined;
onOpen?: (() => any) | undefined;
}>, {
size: "small" | "medium" | "large" | "full";
title: string;
showClose: boolean;
showFooter: boolean;
showCancel: boolean;
showConfirm: boolean;
cancelText: string;
confirmText: string;
confirmDisabled: boolean;
closeOnClickModal: boolean;
closeOnPressEscape: boolean;
contentClass: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_6: DefineComponent<__VLS_Props_7, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
change: (value: string) => any;
"update:modelValue": (value: string) => any;
}, string, PublicProps, Readonly<__VLS_Props_7> & Readonly<{
onChange?: ((value: string) => any) | undefined;
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
block: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_7: DefineComponent<__VLS_Props_8, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
select: (node: TreeNode) => any;
expand: (key: string | number, expanded: boolean) => any;
createClass: (node: TreeNode) => any;
}, string, PublicProps, Readonly<__VLS_Props_8> & Readonly<{
onSelect?: ((node: TreeNode) => any) | undefined;
onExpand?: ((key: string | number, expanded: boolean) => any) | undefined;
onCreateClass?: ((node: TreeNode) => any) | undefined;
}>, {
labelKey: string;
nodeKey: string;
childrenKey: string;
selectedKey: string | number | null;
expandedKeys: (string | number)[];
level: number;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare type __VLS_Props = {
    type?: 'primary' | 'default' | 'danger' | 'text';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
};

declare type __VLS_Props_2 = {
    modelValue: string | number;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    clearable?: boolean;
    error?: boolean;
};

declare type __VLS_Props_3 = {
    modelValue: string | number | null;
    options: Option_2[];
    valueKey?: string;
    labelKey?: string;
    placeholder?: string;
    disabled?: boolean;
    filterable?: boolean;
    error?: boolean;
};

declare type __VLS_Props_4 = {
    columns: Column[];
    data: any[];
    rowKey?: string;
    loading?: boolean;
    stripe?: boolean;
    showIndex?: boolean;
    selectable?: boolean;
    selectedKeys?: (string | number)[];
};

declare type __VLS_Props_5 = {
    modelValue: boolean;
    title?: string;
    size?: 'small' | 'medium' | 'large' | 'full';
    customWidth?: string;
    showClose?: boolean;
    showFooter?: boolean;
    showCancel?: boolean;
    showConfirm?: boolean;
    cancelText?: string;
    confirmText?: string;
    confirmDisabled?: boolean;
    closeOnClickModal?: boolean;
    closeOnPressEscape?: boolean;
    contentClass?: string;
};

declare type __VLS_Props_6 = {
    currentPage: number;
    pageSize: number;
    total: number;
    pageSizes?: number[];
    showTotal?: boolean;
    showSizeChanger?: boolean;
    showQuickJumper?: boolean;
    pagerCount?: number;
};

declare type __VLS_Props_7 = {
    modelValue: string;
    tabs: Tab[];
    block?: boolean;
};

declare type __VLS_Props_8 = {
    data: TreeNode[];
    nodeKey?: string;
    labelKey?: string;
    childrenKey?: string;
    selectedKey?: string | number | null;
    expandedKeys?: (string | number)[];
    level?: number;
};

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLButtonElement;
};

declare function __VLS_template_2(): {
    attrs: Partial<{}>;
    slots: {
        prefix?(_: {}): any;
        suffix?(_: {}): any;
    };
    refs: {
        inputRef: HTMLInputElement;
    };
    rootEl: HTMLDivElement;
};

declare function __VLS_template_3(): {
    attrs: Partial<{}>;
    slots: {
        option?(_: {
            option: Option_2;
        }): any;
    };
    refs: {
        selectRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};

declare function __VLS_template_4(): {
    attrs: Partial<{}>;
    slots: Partial<Record<string, (_: {
        row: any;
        index: number;
        value: any;
    }) => any>> & {
        empty?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_5(): {
    attrs: Partial<{}>;
    slots: {
        header?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};

declare function __VLS_template_6(): {
    attrs: Partial<{}>;
    slots: Partial<Record<`tab-${string}`, (_: {
        tab: Tab;
    }) => any>>;
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_7(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        icon(props: {
            node: TreeNode;
            expanded: boolean;
        }): any;
        actions(props: {
            node: TreeNode;
        }): any;
    }> & {
        icon(props: {
            node: TreeNode;
            expanded: boolean;
        }): any;
        actions(props: {
            node: TreeNode;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_TemplateResult_2 = ReturnType<typeof __VLS_template_2>;

declare type __VLS_TemplateResult_3 = ReturnType<typeof __VLS_template_3>;

declare type __VLS_TemplateResult_4 = ReturnType<typeof __VLS_template_4>;

declare type __VLS_TemplateResult_5 = ReturnType<typeof __VLS_template_5>;

declare type __VLS_TemplateResult_6 = ReturnType<typeof __VLS_template_6>;

declare type __VLS_TemplateResult_7 = ReturnType<typeof __VLS_template_7>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_4<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_5<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_6<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_7<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare interface Column {
    key: string;
    title: string;
    width?: string;
    minWidth?: string;
    align?: 'left' | 'center' | 'right';
}

declare const _default: {
    install: (app: App) => void;
};
export default _default;

export declare const MButton: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

export declare const MInput: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, __VLS_TemplateResult_2["slots"]>;

export declare const MModal: __VLS_WithTemplateSlots_5<typeof __VLS_component_5, __VLS_TemplateResult_5["slots"]>;

export declare const MPagination: DefineComponent<__VLS_Props_6, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
change: (page: number, pageSize: number) => any;
"update:currentPage": (page: number) => any;
"update:pageSize": (size: number) => any;
}, string, PublicProps, Readonly<__VLS_Props_6> & Readonly<{
onChange?: ((page: number, pageSize: number) => any) | undefined;
"onUpdate:currentPage"?: ((page: number) => any) | undefined;
"onUpdate:pageSize"?: ((size: number) => any) | undefined;
}>, {
pageSizes: number[];
showTotal: boolean;
showSizeChanger: boolean;
showQuickJumper: boolean;
pagerCount: number;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

export declare const MSelect: __VLS_WithTemplateSlots_3<typeof __VLS_component_3, __VLS_TemplateResult_3["slots"]>;

export declare const MTable: __VLS_WithTemplateSlots_4<typeof __VLS_component_4, __VLS_TemplateResult_4["slots"]>;

export declare const MTabs: __VLS_WithTemplateSlots_6<typeof __VLS_component_6, __VLS_TemplateResult_6["slots"]>;

export declare const MTree: __VLS_WithTemplateSlots_7<typeof __VLS_component_7, __VLS_TemplateResult_7["slots"]>;

declare interface Option_2 {
    [key: string]: any;
    disabled?: boolean;
}

declare interface Tab {
    label: string;
    value: string;
    disabled?: boolean;
    badge?: number | string;
}

declare interface TreeNode {
    [key: string]: any;
}

export { }
