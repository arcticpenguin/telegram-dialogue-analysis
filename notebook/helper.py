import pandas as pd
import numpy as np

def load_data(small=True):
    if small:
        data_path = "./smallData.csv"
    else:
        data_path = "./fullData.csv"
    
    return pd.read_csv(data_path)
    