import React, {useState} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
import {widthPercentageToDP} from '../../utils/responsiveUtils';
import {secondaryColor} from '../../constants';
import SvgHistogram from './SvgHistogram';
import Button from '../common/Button';
import {Switch} from 'native-base';

const Histogram: React.FC<IHistogramProps> = ({histogram}) => {
  const [libraryHistogram, setLibraryHistogram] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Commits Histogram</Text>
        <Switch value={libraryHistogram} onValueChange={() => setLibraryHistogram(!libraryHistogram)} />
      </View>
      {libraryHistogram ? (
        <SvgHistogram data={histogram} />
      ) : (
        histogram.map(data => (
          <View key={data.name} style={styles.rowContainer}>
            <View style={styles.month}>
              <Text>{data.name}</Text>
            </View>
            {data.value > 0 ? (
              <View
                key={data.label}
                style={{
                  ...styles.line,
                  width: widthPercentageToDP(`${data.size}%`) - 80,
                  backgroundColor: secondaryColor,
                }}>
                <Text style={styles.value}>{data.value}</Text>
              </View>
            ) : (
              <View key={data.label} style={styles.line}>
                <Text style={{color: secondaryColor}}>{data.value}</Text>
              </View>
            )}
          </View>
        ))
      )}
    </View>
  );
};

export default Histogram;
