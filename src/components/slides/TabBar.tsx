import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { BottomTabBarOptions, BottomTabBarProps } from '@react-navigation/bottom-tabs';

type TabBarProps = BottomTabBarProps<BottomTabBarOptions>;

const IN_ANIM_DURATION = 100;
const OUT_ANIM_DURATION = 150;
const DOT_WIDTH = 10;
const DOT_MARGIN = 5;

const TabBar = ({ state, descriptors }: TabBarProps) => {
    const activeIndex = state.routes.findIndex((route) =>
        descriptors[route.key].navigation.isFocused(),
    );

    const prevIndex = useRef(activeIndex);

    const fullWidth = (DOT_WIDTH + DOT_MARGIN * 2) * (state.routes.length - 1) + DOT_MARGIN;

    const positionAnimation = useRef(new Animated.Value(0));
    const widthAnimation = useRef(new Animated.Value(DOT_WIDTH));

    useEffect(() => {
        const delta = activeIndex - prevIndex.current;
        if (delta > 0) {
            Animated.sequence([
                Animated.timing(widthAnimation.current, {
                    toValue: DOT_WIDTH * 2 + DOT_MARGIN,
                    duration: IN_ANIM_DURATION,
                    useNativeDriver: false,
                    easing: Easing.sin,
                }),
                Animated.parallel([
                    Animated.timing(widthAnimation.current, {
                        toValue: DOT_WIDTH,
                        duration: OUT_ANIM_DURATION,
                        useNativeDriver: false,
                        easing: Easing.sin,
                    }),
                    Animated.timing(positionAnimation.current, {
                        toValue: activeIndex * (DOT_WIDTH + DOT_MARGIN),
                        duration: OUT_ANIM_DURATION,
                        useNativeDriver: false,
                        easing: Easing.sin,
                    }),
                ]),
            ]).start();
        } else {
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(widthAnimation.current, {
                        toValue: DOT_WIDTH * 2 + DOT_MARGIN,
                        duration: IN_ANIM_DURATION,
                        useNativeDriver: false,
                        easing: Easing.sin,
                    }),
                    Animated.timing(positionAnimation.current, {
                        toValue: activeIndex * (DOT_WIDTH + DOT_MARGIN),
                        duration: IN_ANIM_DURATION,
                        useNativeDriver: false,
                        easing: Easing.sin,
                    }),
                ]),
                Animated.timing(widthAnimation.current, {
                    toValue: DOT_WIDTH,
                    duration: OUT_ANIM_DURATION,
                    useNativeDriver: false,
                    easing: Easing.sin,
                }),
            ]).start();
        }
        prevIndex.current = activeIndex;
    }, [activeIndex]);

    return (
        <View style={styles.barWrapper}>
            <View
                style={[
                    styles.tabWrapper,
                    {
                        width: fullWidth,
                    },
                ]}
            >
                <Animated.View
                    style={[
                        styles.tab,
                        {
                            width: widthAnimation.current,
                            transform: [
                                {
                                    translateX: positionAnimation.current,
                                },
                            ],
                        },
                    ]}
                />
            </View>
        </View>
    );
};

export const renderTabBar = (props: TabBarProps) => <TabBar {...props} />;

const styles = StyleSheet.create({
    barWrapper: {
        paddingVertical: 30,
        paddingHorizontal: 10,
        display: 'flex',
        alignItems: 'center',
    },
    tabWrapper: {
        backgroundColor: '#3b3a42',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 13,
        height: 20,
    },
    tab: {
        borderRadius: 50,
        backgroundColor: '#FFF',
        width: 10,
        height: 10,
        margin: 5,
    },
});
