/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function FactoryCard(props) {
  const { factory, overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="330px"
      height="289px"
      justifyContent="center"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      padding="15px 15px 15px 15px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "FactoryCard")}
      {...rest}
    >
      <Image
        width="unset"
        height="184px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={factory?.imgURL}
        {...getOverrideProps(
          overrides,
          "patrick-hendry-6xeDIZgoPaw-unsplash 1"
        )}
      ></Image>
      <Flex
        padding="0px 0px 0px 0px"
        width="314px"
        height="51px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 28")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24.204544067382812px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="314px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={factory?.name}
          {...getOverrideProps(overrides, "Cookie Factory")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="19.363636016845703px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="314px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="32px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={factory?.address}
          {...getOverrideProps(overrides, "Mannerheimintie 3")}
        ></Text>
      </Flex>
    </Flex>
  );
}
