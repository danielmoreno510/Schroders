import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
import {widthPercentageToDP} from '../../utils/responsiveUtils';
import {INSET, primaryColor, secondaryColor} from '../../constants';
import SvgHistogram from './SvgHistogram';
import {NativeBaseProvider, Switch} from 'native-base';

const Histogram: React.FC<IHistogramProps> = ({
  histogram,
  total,
  isLibrary,
  changeChart,
}) => (
  <NativeBaseProvider initialWindowMetrics={INSET}>
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Commits Histogram</Text>
        <Switch
          onTrackColor={primaryColor}
          isChecked={isLibrary}
          onToggle={changeChart}
        />
      </View>
      {isLibrary ? (
        <SvgHistogram data={histogram} total={total} />
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
  </NativeBaseProvider>
);

export default Histogram;
