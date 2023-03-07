/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FactoryCardProps } from "./FactoryCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FactoryCardCollectionOverridesProps = {
    FactoryCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    FactoryCard?: FactoryCardProps;
} & EscapeHatchProps;
export declare type FactoryCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => FactoryCardProps;
} & {
    overrides?: FactoryCardCollectionOverridesProps | undefined | null;
}>;
export default function FactoryCardCollection(props: FactoryCardCollectionProps): React.ReactElement;
