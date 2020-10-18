# ETL process to update data warehouse weekly

import pandas as pd
pd.set_option('display.max_columns', None)
df = pd.read_csv('In-TutorList.csv')
df.drop_duplicates(subset='Telephone', keep='first', inplace=True)
df['Whatsapp'] = '852'+df['Telephone']
cols = df.columns.tolist()
cols = cols[:8]+cols[-1:]+cols[8:9]+cols[-4:-1]+cols[9:-4]
df = df[cols]
df['Selfintro'] = df['Selfintro'].str.strip()
df['Selfintro'] = df['Selfintro'].str.replace("\n","")

unsub = pd.read_csv('Unsubscribe.csv')
unsublist = unsub['email'].tolist()
df = df[~df['Email'].isin(unsublist)]

df.to_csv('In-TutorList.csv', index=False, encoding='utf-8-sig')
