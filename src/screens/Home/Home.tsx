import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {NativeBaseProvider, Spinner} from 'native-base';

import Button from '../../components/common/Button';
import styles from './styles';
import {INSET, primaryColor} from '../../constants';
import Histogram from '../../components/Histogram';

const Home: React.FC<IHomeProps> = ({
  isFetchingCommitList,
  commitList,
  histogramData,
  year,
  isLibrary,
  getCommits,
  changeChart,
  navigation,
}) => {
  React.useEffect(() => {
    getCommits('2023');
  }, [getCommits]);

  return (
    <ScrollView style={styles.container}>
      <NativeBaseProvider initialWindowMetrics={INSET}>
        <Text style={styles.title}>Swift Repository</Text>
        {!isFetchingCommitList ? (
          <View>
            <Histogram
              histogram={histogramData}
              total={commitList.length}
              isLibrary={isLibrary}
              changeChart={changeChart}
            />
            <View style={styles.yearContainer}>
              {year !== '2021' && (
                <View style={styles.year}>
                  <Button text="2021" onPress={() => getCommits('2021')} />
                </View>
              )}
              {year !== '2022' && (
                <View style={styles.year}>
                  <Button text="2022" onPress={() => getCommits('2022')} />
                </View>
              )}
              {year !== '2023' && (
                <View style={styles.year}>
                  <Button text="2023" onPress={() => getCommits('2023')} />
                </View>
              )}
            </View>
            <View style={styles.button}>
              <Button
                text="Show List"
                onPress={() => navigation.navigate('Commit List')}
              />
            </View>
          </View>
        ) : (
          <Spinner style={styles.spinner} color={primaryColor} size="lg" />
        )}
      </NativeBaseProvider>
    </ScrollView>
  );
};

export default Home;
