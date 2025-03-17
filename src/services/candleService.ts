import { supabase } from './supabaseClient';

export interface CandleProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  size: string;
  burnTime: string;
  price: string;
  isFavorite?: boolean;
}

export const candleService = {
  async getAllCandles() {
    const { data, error } = await supabase
      .from('candles')
      .select('*')
      .order('name');
    
    if (error) throw error;
    return data;
  },

  async updateCandle(id: string, updates: Partial<CandleProduct>) {
    const { data, error } = await supabase
      .from('candles')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async createCandle(candle: Omit<CandleProduct, 'id'>) {
    const { data, error } = await supabase
      .from('candles')
      .insert([candle])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async deleteCandle(id: string) {
    const { error } = await supabase
      .from('candles')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};
