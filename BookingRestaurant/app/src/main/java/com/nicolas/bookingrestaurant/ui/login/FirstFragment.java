package com.nicolas.bookingrestaurant.ui.login;

import android.app.Activity;
import android.app.DatePickerDialog;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.DatePicker;
import android.widget.Toast;


import androidx.annotation.NonNull;
import androidx.fragment.app.DialogFragment;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;

import com.google.android.material.snackbar.Snackbar;
import com.nicolas.bookingrestaurant.databinding.FragmentFirstBinding;

import java.text.DateFormat;
import java.util.Calendar;

public class FirstFragment extends Fragment {

    private FragmentFirstBinding binding;

    @Override
    public View onCreateView(
            LayoutInflater inflater, ViewGroup container,
            Bundle savedInstanceState
    ) {

        binding = FragmentFirstBinding.inflate(inflater, container, false);
        return binding.getRoot();

    }

    public void onViewCreated(@NonNull View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        binding.cardFirst.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                DialogFragment newFragment = new SelectDateFragment( );
                newFragment.show(getParentFragmentManager(), "DatePicker");
                Toast.makeText(binding.getRoot().getContext(), "Reserva realizada", Toast.LENGTH_LONG).show();
            }
        });
        binding.cardSecond.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                DialogFragment newFragment = new SelectDateFragment( );
                newFragment.show(getParentFragmentManager(), "DatePicker");
                Toast.makeText(binding.getRoot().getContext(), "Reserva realizada", Toast.LENGTH_LONG).show();
            }
        });
        binding.cardThree.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                DialogFragment newFragment = new SelectDateFragment( );
                newFragment.show(getParentFragmentManager(), "DatePicker");
                Toast.makeText(binding.getRoot().getContext(), "Reserva realizada", Toast.LENGTH_LONG).show();
            }
        });
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
    }

}