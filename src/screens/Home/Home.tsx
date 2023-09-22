import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Spinner} from 'native-base';

import Button from '../../components/common/Button';
import styles from './styles';
import {primaryColor} from '../../constants';
import Histogram from '../../components/common/Histogram';

const Home: React.FC<IHomeProps> = ({
  isFetchingCommitList,
  histogramData,
  year,
  getCommits,
  navigation,
}) => {
  React.useEffect(() => {
    getCommits('2023');
  }, [getCommits]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Swift Repository</Text>
      {!isFetchingCommitList ? (
        <View>
          <Histogram histogram={histogramData} />
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
              data-testid="list"
              text="Show List"
              onPress={() => navigation.navigate('Commit List')}
            />
          </View>
        </View>
      ) : (
        <Spinner color={primaryColor} />
      )}
    </ScrollView>
  );
};

export default Home;
