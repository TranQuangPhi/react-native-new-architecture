package com.newarchitecture.newarchitecture.components;

import com.facebook.jni.HybridData;
import com.facebook.proguard.annotations.DoNotStrip;
import com.facebook.react.fabric.ComponentFactory;
import com.facebook.soloader.SoLoader;

@DoNotStrip
public class CenteredTextRegistry {
    static {
        SoLoader.loadLibrary("fabricjni");
    }

    @DoNotStrip private final HybridData mHybridData;

    @DoNotStrip
    private native HybridData initHybrid(ComponentFactory componentFactory);

    @DoNotStrip
    private CenteredTextRegistry(ComponentFactory componentFactory) {
        mHybridData = initHybrid(componentFactory);
    }

    @DoNotStrip
    public static CenteredTextRegistry register(ComponentFactory componentFactory) {
        return new CenteredTextRegistry(componentFactory);
    }
}