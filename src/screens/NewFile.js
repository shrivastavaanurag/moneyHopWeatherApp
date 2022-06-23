import React from 'react';
import {Dimensions} from 'react-native';
import { VictoryLine, VictoryLabel, VictoryChart, VictoryPortal, VictoryBrushContainer, VictoryAxis, VictoryBrushLine, VictoryVoronoiContainer, VictoryGroup } from "victory-native";

const deviceWidth = Dimensions.get('window').width;
const data = [
    { sat: 45, sun: 50, mon: 48, tue: 42, wed: 41, thur: 30, fri: 40 },
    { sat: 20, sun: 23, mon: 24, tue: 21, wed: 20, thur: 17, fri: 25  },
];
const attributes = ["sat", "sun", "mon", "tue", "wed", "thur", "fri"];
const height = 250;
const width = deviceWidth ;
const padding = { top: 100, left: 50, right: 50, bottom: 50 };

export default class NewFile extends React.Component {

    render() {
        return (
            <VictoryChart height={400} width={400}
                          containerComponent={<VictoryVoronoiContainer/>}
            >
                <VictoryGroup
                    color="#c43a31"
                    labels={({ datum }) => `y: ${datum.y}`}
                    labelComponent={
                        <VictoryTooltip
                            style={{ fontSize: 10 }}
                        />
                    }
                    data={[
                        { x: 1, y: -3 },
                        { x: 2, y: 5 },
                        { x: 3, y: 3 },
                        { x: 4, y: 0 },
                        { x: 5, y: -2 },
                        { x: 6, y: -2 },
                        { x: 7, y: 5 }
                    ]}
                >
                    <VictoryLine/>
                    <VictoryScatter
                        size={({ active }) => active ? 8 : 3}
                    />
                </VictoryGroup>
                <VictoryGroup
                    labels={({ datum }) => `y: ${datum.y}`}
                    labelComponent={
                        <VictoryTooltip
                            style={{ fontSize: 10 }}
                        />
                    }
                    data={[
                        { x: 1, y: 3 },
                        { x: 2, y: 1 },
                        { x: 3, y: 2 },
                        { x: 4, y: -2 },
                        { x: 5, y: -1 },
                        { x: 6, y: 2 },
                        { x: 7, y: 3 }
                    ]}
                >
                    <VictoryLine/>
                    <VictoryScatter
                        size={({ active }) => active ? 8 : 3}
                    />
                </VictoryGroup>
            </VictoryChart>
        );
    }
}

ReactDOM.render(<App/>, mountNode);
