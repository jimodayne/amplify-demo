/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Factory } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FactoryUpdateFormInputValues = {
    name?: string;
    address?: string;
    imgURL?: string;
};
export declare type FactoryUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    imgURL?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FactoryUpdateFormOverridesProps = {
    FactoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    imgURL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FactoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: FactoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    factory?: Factory;
    onSubmit?: (fields: FactoryUpdateFormInputValues) => FactoryUpdateFormInputValues;
    onSuccess?: (fields: FactoryUpdateFormInputValues) => void;
    onError?: (fields: FactoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FactoryUpdateFormInputValues) => FactoryUpdateFormInputValues;
    onValidate?: FactoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FactoryUpdateForm(props: FactoryUpdateFormProps): React.ReactElement;
