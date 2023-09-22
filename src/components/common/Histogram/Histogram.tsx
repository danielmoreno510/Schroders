import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
import {widthPercentageToDP} from '../../../utils/responsiveUtils';
import {secondaryColor} from '../../../constants';

const Histogram: React.FC<IHistogramProps> = ({histogram}) => (
  <View style={styles.container}>
    <Text style={styles.text}>Commits Histogram</Text>

    {histogram.map(data => (
      <View key={data.label} style={styles.rowContainer}>
        <View style={styles.month}>
          <Text>{data.label}</Text>
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
    ))}
  </View>
);

export default Histogram;
