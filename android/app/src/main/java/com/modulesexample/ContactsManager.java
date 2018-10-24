package com.modulesexample;
import android.widget.Toast;
import android.app.Dialog;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;

public class ContactsManager extends ReactContextBaseJavaModule{
    public ContactsManager(ReactApplicationContext contexto){
        super(contexto);
    }
    @Override
    public String getName(){
        return "ContactsManager";
    }

    @ReactMethod
    public void saludo(String name,Callback call){
        call.invoke("Xin chao "+name+", chao  mung ban den voi khoa hoc React Native");
    }

    @ReactMethod
  public void show(String message, int duration) {
    Toast.makeText(getReactApplicationContext(), message, duration).show();
  }

  


}