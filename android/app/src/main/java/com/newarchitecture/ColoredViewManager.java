package com.newarchitecture;

import android.graphics.Color;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.RTNColoredViewManagerInterface;
import com.facebook.react.viewmanagers.RTNColoredViewManagerDelegate;


//@ReactModule(name = ColoredViewManager.NAME)
//public class ColoredViewManager extends SimpleViewManager<ColoredView>
//        implements RTNColoredViewManagerInterface<ColoredView> {
//
//    static final String NAME = "RTNColoredView";
//
//    private final ViewManagerDelegate<ColoredView> mDelegate;
//
//    public ColoredViewManager(ReactApplicationContext context) {
//        mDelegate = new RTNColoredViewManagerDelegate<>(this);
//    }
//
//    @Nullable
//    @Override
//    protected ViewManagerDelegate<ColoredView> getDelegate() {
//        return mDelegate;
//    }
//
//    @NonNull
//    @Override
//    public String getName() {
//        return ColoredViewManager.NAME;
//    }
//
//    @NonNull
//    @Override
//    protected ColoredView createViewInstance(@NonNull ThemedReactContext context) {
//        return new ColoredView(context);
//    }

//    @Override
//    @ReactProp(name = "color")
//    public void setColor(ColoredView view, @Nullable String color) {
//        Log.e("ERROR : ", "setColor : " + color);
//        view.setBackgroundColor(Color.parseColor(color));
//    }
//}