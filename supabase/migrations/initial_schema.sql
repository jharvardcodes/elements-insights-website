            -- Create page_content table
            CREATE TABLE page_content (
                id BIGSERIAL PRIMARY KEY,
                page_name VARCHAR NOT NULL,
                content_key VARCHAR NOT NULL,
                content_value TEXT,
                created_at TIMESTAMPTZ DEFAULT NOW(),
                updated_at TIMESTAMPTZ DEFAULT NOW()
            );

            -- Create products table
            CREATE TABLE products (
                id BIGSERIAL PRIMARY KEY,
                name VARCHAR NOT NULL,
                description TEXT,
                image_url VARCHAR,
                price VARCHAR,
                category VARCHAR,
                created_at TIMESTAMPTZ DEFAULT NOW(),
                updated_at TIMESTAMPTZ DEFAULT NOW()
            );

            -- Create contact_submissions table
            CREATE TABLE contact_submissions (
                id BIGSERIAL PRIMARY KEY,
                name VARCHAR NOT NULL,
                email VARCHAR NOT NULL,
                message TEXT,
                created_at TIMESTAMPTZ DEFAULT NOW()
            );

            -- Create RLS policies
            ALTER TABLE page_content ENABLE ROW LEVEL SECURITY;
            ALTER TABLE products ENABLE ROW LEVEL SECURITY;
            ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

            -- Create policies for page_content
            CREATE POLICY "Allow public read access" ON page_content
                FOR SELECT TO anon
                USING (true);

            CREATE POLICY "Allow authenticated users full access" ON page_content
                FOR ALL TO authenticated
                USING (true)
                WITH CHECK (true);

            -- Create policies for products
            CREATE POLICY "Allow public read access" ON products
                FOR SELECT TO anon
                USING (true);

            CREATE POLICY "Allow authenticated users full access" ON products
                FOR ALL TO authenticated
                USING (true)
                WITH CHECK (true);

            -- Create policies for contact_submissions
            CREATE POLICY "Allow public insert access" ON contact_submissions
                FOR INSERT TO anon
                WITH CHECK (true);

            CREATE POLICY "Allow authenticated users full access" ON contact_submissions
                FOR ALL TO authenticated
                USING (true)
                WITH CHECK (true);

            -- Create function to handle updates
            CREATE OR REPLACE FUNCTION handle_updated_at()
            RETURNS TRIGGER AS $$
            BEGIN
                NEW.updated_at = NOW();
                RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;

            -- Create triggers for updated_at
            CREATE TRIGGER set_updated_at
                BEFORE UPDATE ON page_content
                FOR EACH ROW
                EXECUTE FUNCTION handle_updated_at();

            CREATE TRIGGER set_updated_at
                BEFORE UPDATE ON products
                FOR EACH ROW
                EXECUTE FUNCTION handle_updated_at();
