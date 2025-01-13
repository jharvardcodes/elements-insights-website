import { supabase } from '../lib/supabaseClient';

export interface ContentItem {
  id?: number;
  page_name: string;
  content_key: string;
  content_value: string;
}

export const contentService = {
  async getContent(pageName: string, contentKey: string): Promise<string> {
    const { data, error } = await supabase
      .from('page_content')
      .select('content_value')
      .eq('page_name', pageName)
      .eq('content_key', contentKey)
      .single();

    if (error) {
      console.error('Error fetching content:', error);
      return '';
    }

    return data?.content_value || '';
  },

  async updateContent(pageName: string, contentKey: string, contentValue: string): Promise<void> {
    const { data: existing } = await supabase
      .from('page_content')
      .select('id')
      .eq('page_name', pageName)
      .eq('content_key', contentKey)
      .single();

    if (existing) {
      const { error } = await supabase
        .from('page_content')
        .update({ content_value: contentValue })
        .eq('id', existing.id);

      if (error) throw error;
    } else {
      const { error } = await supabase
        .from('page_content')
        .insert([{ page_name: pageName, content_key: contentKey, content_value: contentValue }]);

      if (error) throw error;
    }
  }
};
