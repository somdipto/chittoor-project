export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      volunteer_applications: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone: string
          address: string | null
          linkedin: string | null
          portfolio: string | null
          message: string | null
          areas_of_interest: string[]
          availability: string
          contribution: string
          motivation: string
          experience: string | null
          submitted_at: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone: string
          address?: string | null
          linkedin?: string | null
          portfolio?: string | null
          message?: string | null
          areas_of_interest: string[]
          availability: string
          contribution: string
          motivation: string
          experience?: string | null
          submitted_at: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string
          address?: string | null
          linkedin?: string | null
          portfolio?: string | null
          message?: string | null
          areas_of_interest?: string[]
          availability?: string
          contribution?: string
          motivation?: string
          experience?: string | null
          submitted_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
