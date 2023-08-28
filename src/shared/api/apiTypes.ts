export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      bookings: {
        Row: {
          cabinId: number | null;
          cabinPrice: number | null;
          created_at: string;
          endDate: string | null;
          extrasPrice: number | null;
          guestId: number | null;
          hasBreak: boolean | null;
          id: number;
          isPaid: boolean | null;
          numGuests: number | null;
          numNights: number | null;
          observations: string | null;
          startDate: string | null;
          status: string | null;
          totalPrice: number | null;
        };
        Insert: {
          cabinId?: number | null;
          cabinPrice?: number | null;
          created_at?: string;
          endDate?: string | null;
          extrasPrice?: number | null;
          guestId?: number | null;
          hasBreak?: boolean | null;
          id?: number;
          isPaid?: boolean | null;
          numGuests?: number | null;
          numNights?: number | null;
          observations?: string | null;
          startDate?: string | null;
          status?: string | null;
          totalPrice?: number | null;
        };
        Update: {
          cabinId?: number | null;
          cabinPrice?: number | null;
          created_at?: string;
          endDate?: string | null;
          extrasPrice?: number | null;
          guestId?: number | null;
          hasBreak?: boolean | null;
          id?: number;
          isPaid?: boolean | null;
          numGuests?: number | null;
          numNights?: number | null;
          observations?: string | null;
          startDate?: string | null;
          status?: string | null;
          totalPrice?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'bookings_cabinId_fkey';
            columns: ['cabinId'];
            referencedRelation: 'cabins';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'bookings_guestId_fkey';
            columns: ['guestId'];
            referencedRelation: 'guests';
            referencedColumns: ['id'];
          },
        ];
      };
      cabins: {
        Row: {
          created_at: string;
          description: string;
          discount: number;
          id: number;
          imageURL: string | null;
          maxCapacity: number;
          name: string;
          regularPrice: number;
        };
        Insert: {
          created_at?: string;
          description: string;
          discount: number;
          id?: number;
          imageURL?: string | null;
          maxCapacity: number;
          name: string;
          regularPrice: number;
        };
        Update: {
          created_at?: string;
          description?: string;
          discount?: number;
          id?: number;
          imageURL?: string | null;
          maxCapacity?: number;
          name?: string;
          regularPrice?: number;
        };
        Relationships: [];
      };
      guests: {
        Row: {
          countryFlag: string | null;
          created_at: string;
          email: string | null;
          fullName: string | null;
          id: number;
          nationalId: string | null;
          nationality: string | null;
        };
        Insert: {
          countryFlag?: string | null;
          created_at?: string;
          email?: string | null;
          fullName?: string | null;
          id?: number;
          nationalId?: string | null;
          nationality?: string | null;
        };
        Update: {
          countryFlag?: string | null;
          created_at?: string;
          email?: string | null;
          fullName?: string | null;
          id?: number;
          nationalId?: string | null;
          nationality?: string | null;
        };
        Relationships: [];
      };
      settings: {
        Row: {
          breakfastPrice: number | null;
          created_at: string;
          id: number;
          maxBookingLength: number | null;
          maxGuestsPerBooking: number | null;
          minBookingLength: number | null;
        };
        Insert: {
          breakfastPrice?: number | null;
          created_at?: string;
          id?: number;
          maxBookingLength?: number | null;
          maxGuestsPerBooking?: number | null;
          minBookingLength?: number | null;
        };
        Update: {
          breakfastPrice?: number | null;
          created_at?: string;
          id?: number;
          maxBookingLength?: number | null;
          maxGuestsPerBooking?: number | null;
          minBookingLength?: number | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
