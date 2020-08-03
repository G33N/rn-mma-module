import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

type Props = {
    id: number;
    title: string;
};

export default function Item({ id = 1, title = 'Example item' }: Props): ReactElement {
    return (
        <View>
            <Text>{`ID: ${id} TITLE: ${title}`}</Text>
        </View>
    );
}
