import type {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native'

export interface Spec extends TurboModule {
  getHelloWorld(name: string): string
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeSampleModule')