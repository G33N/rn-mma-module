import React, { ReactElement } from 'react';
import { SafeAreaView, FlatList, Text } from 'react-native';

import Item from './item';

type Data = {
    id: number;
    title: string;
};

type Props = {
    data?: Array<Data>;
    text?: string;
};

export default function List({
    data = [{ id: 1, title: 'Example title' }],
    text = 'Example List',
}: Props): ReactElement {
    return (
        <SafeAreaView>
            <Text>{text}</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item id={item.id} title={item.title} />}
                keyExtractor={(item: any) => item.id}
            />
        </SafeAreaView>
    );
}
