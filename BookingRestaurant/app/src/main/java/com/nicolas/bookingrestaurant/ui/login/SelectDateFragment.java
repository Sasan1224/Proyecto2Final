package com.nicolas.bookingrestaurant.ui.login;

import android.app.DatePickerDialog;
import android.app.Dialog;
import android.os.Build;
import android.os.Bundle;
import android.widget.DatePicker;
import android.widget.TextView;

import androidx.annotation.RequiresApi;
import androidx.fragment.app.DialogFragment;

import com.nicolas.bookingrestaurant.R;

import java.text.DateFormat;
import java.util.Calendar;

public class SelectDateFragment extends DialogFragment implements DatePickerDialog.OnDateSetListener {

    private String currentDateString;

    @RequiresApi(api = Build.VERSION_CODES.N)
    @Override
    public Dialog onCreateDialog(Bundle savedInstanceState) {
        final Calendar calendar = Calendar.getInstance();
        int yy = calendar.get(Calendar.YEAR);
        int mm = calendar.get(Calendar.MONTH);
        int dd = calendar.get(Calendar.DAY_OF_MONTH);
        return new DatePickerDialog(getActivity(), this, yy, mm, dd);
    }

    public void onDateSet(DatePicker view, int yy, int mm, int dd) {
        Calendar c = Calendar.getInstance();
        c.set(Calendar.YEAR, yy);
        c.set(Calendar.MONTH,mm);
        c.set(Calendar.DAY_OF_MONTH,dd);
        this.currentDateString = DateFormat.getDateInstance().format(c.getTime());
    }

    public String getCurrentDateString() {
        return currentDateString;
    }
}