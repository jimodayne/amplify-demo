/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Factory } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FactoryCardOverridesProps = {
    FactoryCard?: PrimitiveOverrideProps<FlexProps>;
    "patrick-hendry-6xeDIZgoPaw-unsplash 1"?: PrimitiveOverrideProps<ImageProps>;
    "Group 28"?: PrimitiveOverrideProps<FlexProps>;
    "Cookie Factory"?: PrimitiveOverrideProps<TextProps>;
    "Mannerheimintie 3"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FactoryCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    factory?: Factory;
} & {
    overrides?: FactoryCardOverridesProps | undefined | null;
}>;
export default function FactoryCard(props: FactoryCardProps): React.ReactElement;
