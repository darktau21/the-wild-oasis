export type Json =
  | { [key: string]: Json | undefined }
  | Json[]
  | boolean
  | null
  | number
  | string;

export interface Database {
  public: {
    CompositeTypes: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Tables: {
      bookings: {
        Insert: {
          cabinId?: null | number;
          cabinPrice?: null | number;
          created_at?: string;
          endDate?: null | string;
          extrasPrice?: null | number;
          guestId?: null | number;
          hasBreak?: boolean | null;
          id?: number;
          isPaid?: boolean | null;
          numGuests?: null | number;
          numNights?: null | number;
          observations?: null | string;
          startDate?: null | string;
          status?: null | string;
          totalPrice?: null | number;
        };
        Relationships: [
          {
            columns: ['cabinId'];
            foreignKeyName: 'bookings_cabinId_fkey';
            referencedColumns: ['id'];
            referencedRelation: 'cabins';
          },
          {
            columns: ['guestId'];
            foreignKeyName: 'bookings_guestId_fkey';
            referencedColumns: ['id'];
            referencedRelation: 'guests';
          },
        ];
        Row: {
          cabinId: null | number;
          cabinPrice: null | number;
          created_at: string;
          endDate: null | string;
          extrasPrice: null | number;
          guestId: null | number;
          hasBreak: boolean | null;
          id: number;
          isPaid: boolean | null;
          numGuests: null | number;
          numNights: null | number;
          observations: null | string;
          startDate: null | string;
          status: null | string;
          totalPrice: null | number;
        };
        Update: {
          cabinId?: null | number;
          cabinPrice?: null | number;
          created_at?: string;
          endDate?: null | string;
          extrasPrice?: null | number;
          guestId?: null | number;
          hasBreak?: boolean | null;
          id?: number;
          isPaid?: boolean | null;
          numGuests?: null | number;
          numNights?: null | number;
          observations?: null | string;
          startDate?: null | string;
          status?: null | string;
          totalPrice?: null | number;
        };
      };
      cabins: {
        Insert: {
          created_at?: string;
          description: string;
          discount: number;
          id?: number;
          imageURL?: null | string;
          maxCapacity: number;
          name: string;
          regularPrice: number;
        };
        Relationships: [];
        Row: {
          created_at: string;
          description: string;
          discount: number;
          id: number;
          imageURL: null | string;
          maxCapacity: number;
          name: string;
          regularPrice: number;
        };
        Update: {
          created_at?: string;
          description?: string;
          discount?: number;
          id?: number;
          imageURL?: null | string;
          maxCapacity?: number;
          name?: string;
          regularPrice?: number;
        };
      };
      guests: {
        Insert: {
          countryFlag?: null | string;
          created_at?: string;
          email?: null | string;
          fullName?: null | string;
          id?: number;
          nationalId?: null | string;
          nationality?: null | string;
        };
        Relationships: [];
        Row: {
          countryFlag: null | string;
          created_at: string;
          email: null | string;
          fullName: null | string;
          id: number;
          nationalId: null | string;
          nationality: null | string;
        };
        Update: {
          countryFlag?: null | string;
          created_at?: string;
          email?: null | string;
          fullName?: null | string;
          id?: number;
          nationalId?: null | string;
          nationality?: null | string;
        };
      };
      settings: {
        Insert: {
          breakfastPrice?: null | number;
          created_at?: string;
          id?: number;
          maxBookingLength?: null | number;
          maxGuestsPerBooking?: null | number;
          minBookingLength?: null | number;
        };
        Relationships: [];
        Row: {
          breakfastPrice: null | number;
          created_at: string;
          id: number;
          maxBookingLength: null | number;
          maxGuestsPerBooking: null | number;
          minBookingLength: null | number;
        };
        Update: {
          breakfastPrice?: null | number;
          created_at?: string;
          id?: number;
          maxBookingLength?: null | number;
          maxGuestsPerBooking?: null | number;
          minBookingLength?: null | number;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
  };
}
