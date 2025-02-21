import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Doctor, Nurse } from '../types';
import { mockDoctors, mockNurses } from '../data/mockData';

interface StaffState {
  doctors: Doctor[];
  nurses: Nurse[];
}

const initialState: StaffState = {
  doctors: mockDoctors,
  nurses: mockNurses,
};

const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    addDoctor: (state, action: PayloadAction<Doctor>) => {
      state.doctors.push(action.payload);
    },
    updateDoctor: (state, action: PayloadAction<Doctor>) => {
      const index = state.doctors.findIndex((doc) => doc.id === action.payload.id);
      if (index !== -1) {
        state.doctors[index] = action.payload;
      }
    },
    deleteDoctor: (state, action: PayloadAction<string>) => {
      state.doctors = state.doctors.filter((doc) => doc.id !== action.payload);
    },
    addNurse: (state, action: PayloadAction<Nurse>) => {
      state.nurses.push(action.payload);
    },
    updateNurse: (state, action: PayloadAction<Nurse>) => {
      const index = state.nurses.findIndex((nurse) => nurse.id === action.payload.id);
      if (index !== -1) {
        state.nurses[index] = action.payload;
      }
    },
    deleteNurse: (state, action: PayloadAction<string>) => {
      state.nurses = state.nurses.filter((nurse) => nurse.id !== action.payload);
    },
  },
});

export const {
  addDoctor,
  updateDoctor,
  deleteDoctor,
  addNurse,
  updateNurse,
  deleteNurse,
} = staffSlice.actions;

export default staffSlice.reducer;