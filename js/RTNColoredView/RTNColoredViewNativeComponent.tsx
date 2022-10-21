// import type {ViewProps} from 'react-native/Libraries/Components/View/ViewPropTypes';
// import type {HostComponent} from 'react-native';
// import { ViewStyle } from 'react-native';
// import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

// type NativeProps = $ReadOnly<{|
// ...ViewProps,
// color: string
// |}>;

// export default (codegenNativeComponent<NativeProps>(
//     'ColoredView',
// ): HostComponent<NativeProps>);


import type { ViewProps } from 'ViewPropTypes';
import type { HostComponent } from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

export interface ColoredViewNativeProps extends ViewProps {
  color?: string;
}

export default codegenNativeComponent<ColoredViewNativeProps>(
  'RTNColoredView'
) as HostComponent<ColoredViewNativeProps>;